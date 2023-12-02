"use client";
import { useStore } from "@/store";
import { MessageSquare } from "lucide-react";
import { HtmlHTMLAttributes } from "react";

interface RooItemProps {
  title: string;
}

export function RoomItem({ title, ...props }: RooItemProps) {
  const { key } = props as any;
  const { socket, setCurrentRoom } = useStore();

  const handlerEnterAtRoom = () => {
    setCurrentRoom(title);
    if (socket) {
      socket.emit("getAllMessagesRoomByClient", title);
    }
  };

  return (
    <p key={key}>
      <button
        onClick={handlerEnterAtRoom}
        className="flex bg-slate-600 hover:bg-slate-500  items-center gap-3 rounded px-3 py-2 "
      >
        <MessageSquare className="text-white" />
        <span className="font-medium text-white ">{title}</span>
      </button>
    </p>
  );
}
