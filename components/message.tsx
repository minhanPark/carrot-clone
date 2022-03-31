import { cls } from "../libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

export default function Message({
  message,
  avatarUrl,
  reversed,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-300" />
      <div
        className={cls(
          "w-3/4 text-sm text-gray-700 flex",
          reversed ? "justify-end" : "justify-start"
        )}
      >
        <p className="p-2 border rounded-md inline-block border-gray-300">
          {message}
        </p>
      </div>
    </div>
  );
}
