import IconButton from "@/components/IconButton";
import { SiGithub } from "react-icons/si";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen light font-[family-name:var(--font-geist-sans)]">
      <div className="test">
        <h1>MERZIE.DEV</h1>
        <div className="buttons">
          <IconButton
            icon={<SiGithub />}
            url="https://github.com/jslowik1"
          />
        </div>
      </div>

    </div>
  );
}
