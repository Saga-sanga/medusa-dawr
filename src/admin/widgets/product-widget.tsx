import type { ProductDetailsWidgetProps, WidgetConfig } from "@medusajs/admin";
import { useState } from "react";
import { useTiptapEditor } from "../hooks/useTiptapEditor";

const ProductWidget = ({ product, notify }: ProductDetailsWidgetProps) => {
  const [marketingContent, setMarketingContent] = useState<string>();
  const { editor } = useTiptapEditor(product.marketingContet);

  return (
    <div className="bg-white p-8 border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-semibold">Marketing Content</h1>
      {/* <textarea
        onChange={(e) => setMarketingContent(e.target.value)}
      ></textarea> */}

      <button
        className="bg-black rounded p-1 text-white"
        onClick={() => notify.success("success", marketingContent)}
      >
        Click me
      </button>
    </div>
  );
};

export const config: WidgetConfig = {
  zone: "product.details.after",
};

export default ProductWidget;
