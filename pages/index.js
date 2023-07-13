import Layout from "@/components/common/Layout";
import { fetcher } from "@/helpers/helpScripts";
import { useEffect } from "react";
export default function Index() {

  if (typeof window !== "undefined") {      
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await fetcher(
        'upload',
        '',
        {
          method: 'post',
          body: new FormData(e.target)
        }
      )
    })
  }

  return (
    <Layout nopageHeader>
      <form>
        <input type="file" name="files" />
        <input type="text" name="ref" value="api::cert-document.cert-document" />
        <input type="text" name="refId" value="3" />
        <input type="text" name="field" value="document" />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}