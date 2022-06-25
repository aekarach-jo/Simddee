import React, { Fragment } from "react";
import Payment from "../../components/member/payment";
import Footer from "../../components/subComponent/Footer";
import Nav from "../../components/subComponent/Nav";

export default function payment() {
  return (
    <Fragment>
      <Nav />
      <Payment />
      <Footer />
    </Fragment>
  );
}

// payment.getLayout = function PageLayout({ page }) {
//   return (
//     <Layout_main>
//       {page}
//     </Layout_main>
//   )
// }
