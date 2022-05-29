import React from "react";
import { useParams } from "react-router-dom";
import Headline from "Components/Headline";
import InsuranceListing from "Components/InsuranceListing";
import Page from "Components/Page";
import carInsurance from "Data/carinsurance.json";
import companies from "Data/companies.json";
import homeInsurance from "Data/homeinsurance.json";
import session from "Data/session.json";
import Insurances from "Services/insurances-service";

import copy from "./copy.json";
import InsurancePage from "./Insurance";

import styles from "./session.module.css";

export default function SessionPage() {
  const { insuranceId } = useParams();
  const insurances = Insurances.setupInsurances(
    [homeInsurance, carInsurance],
    companies
  );
  const config = { language: "sv" };

  if (insuranceId) {
    return (
      <InsurancePage
        config={config}
        insurances={insurances}
        insuranceId={insuranceId}
        session={session}
      />
    );
  }

  return (
    <Page
      title={copy.pageTitle[config.language]}
      className={styles.page}
      breadcrumbs={[
        { name: "Session", url: "/session" },
        { name: session.freeText, url: "/session" },
      ]}
    >
      <Headline.Primary margin="top bottom" large className={styles.alignItems}>
        {session.freeText}
      </Headline.Primary>

      <div className={styles.alignItems}>
        <strong>Session ID:&nbsp;</strong>
        g7323a33-5953-443c-bb15-19hfddb69288
      </div>

      <InsuranceListing insurances={insurances} />
    </Page>
  );
}
