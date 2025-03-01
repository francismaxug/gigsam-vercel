interface TerminalProps {
  lines: {
    content: string
    isCommand?: boolean
    prefix?: string
  }[]
}

export function Terminal({ lines }: TerminalProps) {
  return (
    <div className="bg-[#1E1E1E] rounded-b-lg w-[19rem] p-4 font-mono text-sm ">
      {/* Terminal Header */}
      {/* <div className="flex items-center gap-1.5 mb-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div> */}

      {/* Terminal Content */}
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start gap-4 w-[20rem]">
            {/* Line Number */}
            <span className="text-gray-600 select-none w-5 text-right">
              {index + 1}
            </span>

            {/* Line Content */}
            <div className="flex items-center gap-2">
              {line.isCommand && (
                <span className="text-green-400 select-none">
                  {line.prefix || "$"}
                </span>
              )}
              <span className={line.isCommand ? "text-white" : "text-white/50"}>
                {line.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Example usage:
export function VercelTerminal() {
  const terminalLines = [
    { content: "vercel-site/ git push", isCommand: true },
    { content: "Enumerating objects: 1, done." },
    { content: "Counting objects: 100% (1/1), done." },
    { content: "Writing objects: 100% (1/1)" },
    { content: "Total 1 (delta 0), reused 0 " },
    { content: "To github.com:vercel/vercel-site.git" },
    { content: "   21326a9..8" },
  ]

  return <Terminal lines={terminalLines} />
}
