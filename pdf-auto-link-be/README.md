# Adobe Session Re-Authentication Simulation Tool

This project is developed **strictly for educational purposes** as part of a controlled ethical hacking and social engineering training environment.

## 🎯 Purpose

This tool simulates a session re-authentication prompt resembling a well-known PDF viewer interface (e.g., Adobe Reader). It is intended to help cybersecurity students understand:

- Social engineering mechanics  
- Credential harvesting awareness  
- Client-side fingerprinting and stealth metadata collection  
- Safe and ethical penetration testing techniques

> ⚠️ This project is used only in authorized lab environments where all parties have given informed consent.

## ✅ Features

- Fake session timeout and blur overlay  
- Auto-population of email field from URL  
- Password field prompt with delayed error display  
- Silent collection of metadata including:
  - IP address
  - Country and city
  - Browser user agent
  - Timezone

## 🔗 Usage

To use this simulation, the tool should be served via a secure HTTPS domain.

**URL Format for Auto-Populating Email:**

https://your-domain.level?email=email-value-here


Example:
https://lab.example.com/viewer?email=john.doe@example.com


This ensures that the email address is automatically filled in for a more realistic and seamless simulation.

## 🚨 Disclaimer

> This tool is developed and maintained solely for **educational and research purposes**.  
> Any unauthorized or malicious use of this tool outside a consent-based, lawful testing environment is strictly prohibited.

## 📜 License

MIT License – For ethical educational use only.

---

© GBT Security | Ethical Hacking Division  
