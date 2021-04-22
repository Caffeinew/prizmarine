import { useState } from "react";

export default function Request() {
  const [email, setEmail] = useState("");
  async function submit() {}
  return (
    <div className="text-gray-300 font-thin wrapper px-32 flex justify-center flex-col relative z-10">
      <form onSubmit={submit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
        />
        <input type="submit"/>
      </form>
    </div>
  );
}
