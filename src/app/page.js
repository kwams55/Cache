import AddButton from "@/components/AddButton";
import InputBox from "@/components/InputBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="my-[15%] w-[50%]">
        <div className="flex justify-end w-full">
          <AddButton />
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-7xl text-white">Welcome to Cache</h1>
          <h2 className="text-3xl text-white">Your temporary image storage</h2>
          <InputBox />
        </div>
      </div>
    </main>
  );
}
