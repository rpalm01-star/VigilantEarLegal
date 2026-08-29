import { redirect } from "next/navigation";

/** Bare `/` goes to the English home. Language-prefixed URLs are the canonical form. */
export default function Root() {
  redirect("/en/");
}
