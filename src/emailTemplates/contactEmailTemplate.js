export const contactEmailTemplate = ({ fullname, address, country, phoneNumber, description }) => {
    return `
                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                </head>

                <body style="margin:0; padding:0; background-color:#1A1A1A; font-family: 'Inter', sans-serif;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A1A1A; padding: 40px 0;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0"
                                    style="background-color:#1A1A1A; border: 1px solid #937F4E33; border-radius: 12px; overflow: hidden;">

                                    <!-- Header -->
                                    <tr>
                                        <td align="center" style="padding: 40px 0 20px 0; border-bottom: 1px solid #937F4E33;">
                                            <img src="https://billyhol-react.vercel.app/assets/logo_main-CX3aRdks.png" alt="Wenthura"
                                                width="140" style="display:block;" />
                                        </td>
                                    </tr>

                                    <!-- Hero -->
                                    <tr>
                                        <td align="center" style="padding: 48px 48px 24px 48px;">
                                            <p
                                                style="margin:0 0 16px 0; font-size:12px; letter-spacing:3px; color:#937F4E; text-transform:uppercase;">
                                                Contact Request</p>
                                            <h1
                                                style="margin:0 0 16px 0; font-size:32px; color:#FAFAFA; font-weight:700; line-height:1.3;">
                                                Message Received</h1>
                                            <p style="margin:0; font-size:14px; color:#9A9A9A; line-height:1.6;">Thank you for getting in touch with Wenthura. Your message has been successfully submitted and our team will review it shortly.</p>
                                        </td>
                                    </tr>

                                    <!-- Submission Info -->
                                    <tr>
                                        <td style="padding: 0 48px 32px 48px;">
                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                style="background-color:#24221E; border-radius:8px; border: 1px solid #937F4E33;">
                                                <tr>
                                                    <td style="padding: 24px;">
                                                        <p
                                                            style="margin:0 0 16px 0; font-size:11px; letter-spacing:2px; color:#937F4E; text-transform:uppercase;">
                                                            Submission Details</p>
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#9A9A9A;">Full Name</span>
                                                                </td>
                                                                <td align="right"
                                                                    style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#FAFAFA;">${fullname}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#9A9A9A;">Phone Number</span>
                                                                </td>
                                                                <td align="right"
                                                                    style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#FAFAFA;">${phoneNumber}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#9A9A9A;">Country</span>
                                                                </td>
                                                                <td align="right"
                                                                    style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#FAFAFA;">${country}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#9A9A9A;">Address</span>
                                                                </td>
                                                                <td align="right" style="padding: 8px 0; border-bottom: 1px solid #937F4E22;">
                                                                    <span style="font-size:12px; color:#FAFAFA;">${address}</span>
                                                                </td>
                                                            </tr>
                                                                 <tr>
                                                                <td style="padding: 8px 0; ">
                                                                    <span style="font-size:12px; color:#9A9A9A;">Description</span>
                                                                </td>
                                                                <td align="right"
                                                                    style="padding: 8px 0; ">
                                                                    <span style="font-size:12px; color:#FAFAFA;">${description}</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Divider -->
                                    <tr>
                                        <td style="padding: 0 48px;">
                                            <hr style="border:none; border-top: 1px solid #937F4E33; margin:0;" />
                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center" style="padding: 32px 48px;">
                                            <p style="margin:0 0 8px 0; font-size:11px; color:#9A9A9A; letter-spacing:1px;">VERIFIED
                                                &nbsp;•&nbsp; ANONYMOUS &nbsp;•&nbsp; SCARCE</p>
                                            <p style="margin:0; font-size:11px; color:#937F4E;">© 2026 Wenthura. All rights reserved.
                                            </p>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>
                    </table>

                </body>

                </html>
    `;
};
