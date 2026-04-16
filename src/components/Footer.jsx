function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-5 justify-center text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;