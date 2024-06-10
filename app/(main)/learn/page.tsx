import StickyWrapper from "@/components/StickyWrapper";
import FeedWrapper from "@/components/FeedWrapper";
import Header from "@/app/(main)/learn/Header";

const LearnPage = () => {
    return (
      <div className={"flex gap-[48px] px-6"}>
        <FeedWrapper>
          <Header title={"Japanese"} />
        </FeedWrapper>
        <StickyWrapper>My sticker wrapper</StickyWrapper>
      </div>
    );
};

export default LearnPage;