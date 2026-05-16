"use client";
import { MotionConfig } from "motion/react";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { useRouter } from "next/navigation";
import {motion} from "motion/react";
import React, { useState } from "react";

function EmbedClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter();
  const [copied, setCopied] = useState(false);

  const embedCode = `<script 
  src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
  data-owner-id="${ownerId}">
<script/>`

  const copyCode=()=> {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(()=>setCopied(false), 2000)
  }


  return (

    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="sticky top-0 z-40 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="text-lg font-semibold cursor-pointer"
            onClick={() => navigate.push("/")}
          >
            Support
            <b />
            <span className="text-zinc-400">IQ</span>
          </div>

          <button
            className="px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition"
            onClick={() => navigate.push("/dashboard")}
          >
            Back to DashBoard
          </button>
        </div>
      </div>

      
      <div className="flex justify-center px-4 py-14">
        
        <motion.div
        initial={{opacity : 1, y : 0}}
        transition={{duration: 0.5}}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10"
        >

            <h1 className="text-2xl font-semibold mb-2"> Embed Support IQ</h1>

            <p>Copy and paste this code before <code>&lt;/body&gt;</code></p>

            <div 
            className="relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10"
            >
                <pre className="overflow-x-auto">{embedCode}</pre>

                <button className="absolute top-3 right-3 bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition"
                onClick={copyCode}
                >
                    {copied ? "copied" : "copy"}
                </button>
            </div>


        </motion.div>


      </div>

    </div>
  );
}

export default EmbedClient;
