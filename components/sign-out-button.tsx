import { clearCookie } from "@/lib/auth";


export function SignOutButton() {
    return (
        <form
            action={async () => {
                "use server";
                await clearCookie();
            }}
        >
            <button type="submit">
                Sign Out
            </button>
        </form>
    );
}
