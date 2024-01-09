import AddButton from "@/components/AddButton";
import InputBox from "@/components/InputBox";

export default function Home() {
  const headingStyle = "text-black drop-shadow-2xl";
  return (
    <main className="flex flex-col items-center">
      <div className="my-[15%] w-[50%]">
        <div className="flex justify-end w-full">
          <AddButton />
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h1 className={`text-9xl ${headingStyle}`}>Cache</h1>
          <InputBox />
        </div>
      </div>
    </main>
  );
}
