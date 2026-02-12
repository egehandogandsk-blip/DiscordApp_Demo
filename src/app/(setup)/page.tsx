import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { InitialModal } from "@/components/modals/initial-modal";
import { LandingPage } from "@/components/landing-page";

const SetupPage = async () => {
    const user = await currentUser();

    if (!user) {
        return <LandingPage />
    }

    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (server) {
        return redirect(`/servers/${server.id}`);
    }

    return <InitialModal />;
}

export default SetupPage;
