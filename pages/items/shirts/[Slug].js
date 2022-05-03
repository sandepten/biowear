import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const Slug = router.query.Slug;
  return (
    <div>{Slug}</div>
  )
}

export default Slug