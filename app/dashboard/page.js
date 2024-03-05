"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status == "unauthenticated") {
        router.push("/");
    }

    if (status == "authenticated") {
        return (
            <>
                <h1>Tableau de bord</h1>
                <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
            </>
        );
    }
};

export default Dashboard;
