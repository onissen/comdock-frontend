import Layout from "@/components/common/Layout";
import DetailPage from "@/components/pagetypes/DetailPage";
DetailPage
export default function TestPage() {
    return (
        <Layout siteTitle="TestPage">
            <DetailPage title="Test" contentType="company">
                <section className="detailSection" id="test">
                    <h4>Test</h4>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, excepturi dignissimos reiciendis impedit enim, dolore nesciunt sint ipsa distinctio voluptatibus quis facilis repellendus eos voluptas, sequi deserunt modi incidunt soluta.
                    </div>
                </section>
            </DetailPage>
        </Layout>
    )
}