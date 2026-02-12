"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSocket } from "@/components/providers/socket-provider";

interface ServerSocketProps {
    serverId: string;
}

export const ServerSocket = ({
    serverId
}: ServerSocketProps) => {
    const { socket } = useSocket();
    const router = useRouter();

    useEffect(() => {
        if (!socket) {
            return;
        }

        socket.on(`server:${serverId}:channels:create`, () => {
            router.refresh();
        });

        socket.on(`server:${serverId}:channels:update`, () => {
            router.refresh();
        });

        socket.on(`server:${serverId}:channels:delete`, () => {
            router.refresh();
        });

        socket.on(`server:${serverId}:members:update`, () => {
            router.refresh();
        });

        return () => {
            socket.off(`server:${serverId}:channels:create`);
            socket.off(`server:${serverId}:channels:update`);
            socket.off(`server:${serverId}:channels:delete`);
            socket.off(`server:${serverId}:members:update`);
        }
    }, [socket, serverId, router]);

    return null;
}
