import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

export function useTiptapEditor(content: string) {
  const editor = useEditor({
    extensions,
    content,
    editorProps: { attributes: {
        class: "text-base bg-accent/80 rounded-sm p-2 focus:outline-none",
      },
    },
  });
  return editor;
}
