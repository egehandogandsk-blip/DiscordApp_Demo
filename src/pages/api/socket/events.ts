import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const profile = await currentProfilePages(req);
        const { eventKey, data } = req.body;

        if (!profile) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        if (!eventKey) {
            return res.status(400).json({ error: "Event key missing" });
        }

        res?.socket?.server?.io?.emit(eventKey, data);

        return res.status(200).json({ message: "Event emitted" });
    } catch (error) {
        console.log("[SOCKET_EVENTS_POST]", error);
        return res.status(500).json({ message: "Internal Error" });
    }
}
