import { getAuthorizationUrl } from '@/lib/auth';

export default async function SignInButton() {
    const authkitUrl = await getAuthorizationUrl();

    return (
        <main>
            <a href={authkitUrl}>Sign-in with AuthKit</a>
        </main>
    );
}