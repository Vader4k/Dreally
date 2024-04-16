import { started } from "../constants"

const GetStarted = () => {
  return (
    <section className="w-full flex items-start justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="font-extrabold text-[3rem] max-w-[700px]">Learn how to get started with Dreally</h1>
        <p className="text-neutral-300 leading-6 max-w-[500px]">
          Discover the essentials of Dreally and embark on your journey to success with confidence and ease.
        </p>
      </div>
    </section>
  )
}

export default GetStarted