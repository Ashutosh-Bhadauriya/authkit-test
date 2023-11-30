import { SignOutButton } from "@/components/sign-out-button";
import { getUser } from "@/lib/auth";

export default async function Dashboard() {
    const { user } = await getUser();

    const userFields = user && [
        ["First name", user.firstName],
        ["Last name", user.lastName],
        ["Email", user.email],
        ["Id", user.id],
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Hello World
            {userFields && (
                <div>
                    {userFields.map(([label, value]) => (
                        <div key={value}>
                            {label} : {value}
                        </div>
                    ))}
                </div>
            )}
            <SignOutButton />
        </main>
    );
}