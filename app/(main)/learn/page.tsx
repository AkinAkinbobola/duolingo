import StickyWrapper from "@/components/StickyWrapper";
import FeedWrapper from "@/components/FeedWrapper";
import Header from "@/app/(main)/learn/Header";
import UserProgress from "@/components/UserProgress";

const LearnPage = () => {
    return (
      <div className={"flex gap-[48px] px-6"}>
        <FeedWrapper>
          <Header title={"Japanese"} />
        </FeedWrapper>
        <StickyWrapper>
          <UserProgress
            activeCourse={{
                title: "Japanese",
                imageSrc: "/flags/jp.svg"
            }}
            hearts={2}
            points={100}
            hasActiveSubscription={false}
          />
        </StickyWrapper>
      </div>
    );
};

export default LearnPage;