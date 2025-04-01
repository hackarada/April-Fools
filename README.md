# Security Awareness Training - April Fools' Edition 🛡️

A friendly and educational security awareness tool disguised as an April Fools' prank. This project helps teach important lessons about link safety and security awareness in a fun and memorable way.

## 🎯 Purpose

This project serves as an educational tool to:
- Demonstrate how easily users can be led to click on unknown links
- Teach important security awareness lessons in an engaging way
- Provide a practical example of social engineering techniques
- Encourage better security practices through hands-on experience

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- Docker
- Nginx

## 🛠️ Setup

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t security-awareness-app .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:80 security-awareness-app
   ```
3. Access the application at `http://localhost:8080`

## 📖 How to Use

1. Deploy the application to your preferred hosting platform
2. Share the link with colleagues or friends (preferably during April Fools')
3. When they click the link, they'll receive a friendly security lesson about:
   - Link verification
   - Source checking
   - Security awareness
   - Social engineering tactics

## 🔒 Security Features

- Secure Docker configuration
- Nginx security headers
- Content Security Policy (CSP)
- XSS protection
- MIME type sniffing prevention
- Frame protection
- Asset caching
- No data collection or storage
- Transparent educational purpose

## 🌟 Best Practices

When using this tool:
- Inform your IT department before deployment
- Use in conjunction with formal security training
- Monitor and measure its effectiveness
- Gather feedback for improvements
- Keep the content professional and educational
- Update regularly with new security lessons

## 🔍 Project Structure

```
├── src/               # Source code
├── public/           # Static assets
├── Dockerfile        # Docker configuration
├── nginx.conf        # Nginx configuration
└── package.json      # Project dependencies
```

## 🤝 Contributing

Feel free to fork this project and customize the message or add additional security lessons. Please maintain the educational and friendly nature of the content.

## 📝 License

MIT License - Feel free to use this for your own security awareness training!

## 🔐 Security Considerations

This project is designed for educational purposes only. While it demonstrates security concepts, it:
- Doesn't collect any user data
- Doesn't execute any harmful code
- Is completely transparent in its educational purpose
- Should only be used with consent and in appropriate contexts

## 🚀 Deployment

The application can be deployed using:
1. Traditional web hosting
2. Docker containers
3. Cloud platforms (AWS, GCP, Azure)
4. Static site hosting (Netlify, Vercel)

Choose the deployment method that best suits your organization's infrastructure and security requirements.