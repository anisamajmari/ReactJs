// our-domain.com/news/something-important

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  console.log(newsId);

  return <h1>The Detail page</h1>;
}

export default DetailPage;
