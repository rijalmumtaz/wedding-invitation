import React, { useEffect } from "react";

import { wishes } from "@/json/wishesPage";
import Card from "@/elements/Card";

import { connect } from "react-redux";
import { fetchPage } from "@/store/actions/page";

function WishesPage(props) {
  const { page } = props;

  useEffect(() => {
    // if page.wishPage dont exist, put page.wishPage
    if (!page.wishPage) props.fetchPage(`/wishes-page`, "wishPage");
  }, []);

  if (!page.hasOwnProperty("wishPage")) return null;

  return (
    <div className="flex flex-col items-center bg-cover-bg bg-cover overflow-hidden h-full">
      <h1 className="text-3xl bg-white-bg w-full text-center py-3 font-rozha-one fixed shadow-xl">
        Ucapan dan Doa
      </h1>
      <div className="flex flex-col items-center px-5 pb-5 gap-4 mt-20">
        {page.wishPage.wishes.map((wish, index) => {
          return (
            <Card
              data={wish}
              key={`wish-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(WishesPage);
