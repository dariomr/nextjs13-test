import '../styles/globals.css'
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
