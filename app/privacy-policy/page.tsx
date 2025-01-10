export default function PrivacyPolicy() {
    return (
        <div className="space-y-12 text-md md:text-lg text-muted-foreground pb-4 md:pb-8">
            <p>Last Updated: January 2025</p>

            <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Open Source & Free</h2>
                <p>
                    convert it is completely open source and free to use. We don't display ads, we don't sell your data, 
                    and we don't require you to create an account. The source code is available on GitHub for transparency 
                    and community contributions.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Your Privacy</h2>
                <p>
                    All file conversions happen directly in your browser using WebAssembly technology. Your files are never 
                    uploaded to any server, ensuring complete privacy and security of your content. We have no access to 
                    your files or their contents.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Analytics</h2>
                <p>
                    We use Google Analytics solely to understand how users interact with our website to improve the user 
                    experience. This collects basic usage data like page views and browser type. You can opt out of this 
                    through your browser settings.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Contact</h2>
                <p>
                    For questions about this privacy policy or to report issues, you can:
                    - Email us at lagrich.mohamed@outlook.com
                    - Open an issue on our GitHub repository
                    - Submit a pull request with improvements
                </p>
            </div>

            <p className="text-sm">
                By using convert it, you agree to this privacy policy. This policy may be updated occasionally, 
                with changes noted in our GitHub repository.
            </p>
        </div>
    );
}
