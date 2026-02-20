# React + Google Apps Script (GAS) Contact Form Integration Guide

This guide documents the implementation of a serverless contact form using React (Frontend) and Google Apps Script (Backend). This setup logs submissions to Google Sheets and sends email notifications via Gmail.

## ⚠️ CRITICAL: Multi-Project Usage Warning
**Before You Start (Important!)**
If you use this system for another project (e.g., "MetaPuri"):

1.  **Do NOT reuse the existing Spreadsheet.**
    - If you reuse the same sheet/script, inquiries from different projects will mix together.
2.  **Create a NEW Spreadsheet for each project.**
3.  **Create a NEW Script in that new sheet.**
4.  **Deploy a NEW Web App and get a specific URL for that project.**

**Rule of Thumb:** 
**1 Project = 1 Spreadsheet = 1 Script = 1 Unique URL**

---

## 1. Google Apps Script (Backend)

### Setup
1.  Create a new Google Sheet.
2.  Go to `Extensions` > `Apps Script`.
3.  Paste the following code into `Code.gs`.

### Code Template
```javascript
function doPost(e) {
  try {
    // --- Configuration ---
    var NOTIFY_EMAIL = "your-email@example.com"; // Notification recipient
    var EMAIL_SUBJECT_PREFIX = "【Website Inquiry】";
    // ---------------------

    // 1. Sheet Setup
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var date = new Date();
    var formattedDate = Utilities.formatDate(date, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss");

    // 2. Insert Row (Top Insertion)
    // Inserts after header (row 1)
    sheet.insertRowAfter(1);
    
    // Map data to columns (Adjust based on your sheet headers)
    // Example: Date | Name | Email | Subject | Message
    sheet.getRange(2, 1, 1, 5).setValues([[
      formattedDate, 
      data.name, 
      data.email, 
      data.subject || "", 
      data.message
    ]]);

    // 3. Email Notification (GmailApp)
    var mailSubject = EMAIL_SUBJECT_PREFIX + (data.subject || "No Subject");
    var mailBody = "New submission received.\n\n" +
                   "Date: " + formattedDate + "\n" +
                   "Name: " + data.name + "\n" +
                   "Email: " + data.email + "\n" +
                   "Subject: " + (data.subject || "") + "\n\n" +
                   "--- Message ---\n" + 
                   data.message + "\n" +
                   "---------------";
    
    var options = {};
    if (data.email && data.email.indexOf("@") > -1) {
      options.replyTo = data.email; // Set Reply-To
    }

    // Send Email
    GmailApp.sendEmail(NOTIFY_EMAIL, mailSubject, mailBody, options);

    // 4. Return Success Response (JSON)
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Deployment Steps (Critical!)
1.  Click **Deploy** > **New Deployment**.
2.  Select **Web app**.
3.  **Execute as**: `Me` (your account).
4.  **Who has access**: `Anyone` (Crucial for external access).
5.  Click **Deploy**.
6.  Copy the **Web App URL** (ends with `/exec`).

> **Note:** If you modify the script, you MUST create a **New Deployment** (Manage Deployments -> Edit -> New Version) to apply changes.

---

## 2. React Frontend

### Submission Logic
Use `fetch` with `mode: 'no-cors'` and send data as JSON stringified string.

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form Data State
    // const formData = { name, email, subject, message };
    
    const GAS_URL = "YOUR_WEB_APP_URL_HERE";

    try {
        await fetch(GAS_URL, {
            method: "POST",
            mode: "no-cors", // Opaque response
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Success Handling
        // Since mode is no-cors, we assume success if no network error is thrown.
        alert("Sent successfully!");
        // Reset form...

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send.");
    }
};
```

## 3. Troubleshooting

- **CORS Errors**: In `no-cors` mode, you cannot read the response body or status code (it returns strictly opaque). This is normal. Trust the `try-catch` block for network errors.
- **Data Not Saving**: 
    - Check if `Who has access` is set to `Anyone`.
    - Verify sending `JSON.stringify(data)` matches `JSON.parse(e.postData.contents)` in GAS.
- **Email Not Sending**:
    - Check Gmail `Sent` folder.
    - If testing with your own email, Gmail might deduplicate/hide the email in Inbox. Check `All Mail`.
    - Ensure `MailApp` or `GmailApp` permissions were granted during deployment.
