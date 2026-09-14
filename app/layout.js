export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <nav>My Website</nav>

                {children}

                <footer>Footer</footer>
            </body>
        </html>
    );
}
