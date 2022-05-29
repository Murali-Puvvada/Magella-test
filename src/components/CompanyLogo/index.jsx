/* eslint-disable */

import React from "react";

import Avanza from "./comp/Avanza";
import BankIdBlank from "./comp/BankID";
import BankIdColor from "./comp/BankIDColor";
import Bliwa from "./comp/Bliwa";
import DemoCompany from "./comp/DemoCompany";
import Dina from "./comp/Dina";
import EuroAccident from "./comp/EuroAccident";
import Folksam from "./comp/Folksam";
import Gjensidige from "./comp/Gjensidige";
import Handelsbanken from "./comp/Handelsbanken";
import Hedvig from "./comp/Hedvig";
import Ica from "./comp/Ica";
import If from "./comp/If";
import Lansforsakringar from "./comp/Lansforsakringar";
import Lararforbundet from "./comp/Lararforbundet";
import Moderna from "./comp/Moderna";
import Movestic from "./comp/Movestic";
import Paydrive from "./comp/Paydrive";
import Skandia from "./comp/Skandia";
import Svedea from "./comp/Svedea";
import Sveland from "./comp/Sveland";
import TryggHansa from "./comp/TryggHansa";
import Volvia from "./comp/Volvia";

export default function CompanyLogo({ company, className, color, ...rest }) {
  switch (company.toUpperCase()) {
    case "DK-ALMBRAND":
      return <AlmBrand className={className} {...rest} />;
    case "DK-LAERERSTANDENSBRANDFORSIKRING":
      return (
        <LaererstandensBrandforsikring
          className={className}
          color={color}
          {...rest}
        />
      );
    case "DK-LB":
      return <LB className={className} color={color} {...rest} />;
    case "DK-NEMID":
      return <NemID className={className} color={color} {...rest} />;
    case "DK-TOPDANMARK":
      return <TopDanmark className={className} color={color} {...rest} />;

    case "SE-TRYGGHANSA":
    case "SE-TRYGG-HANSA":
    case "NO-TRYG":
    case "DK-TRYG":
      return <TryggHansa className={className} {...rest} />;
    case "SE-FOLKSAM":
      return <Folksam className={className} {...rest} />;
    case "SE-AGRIA":
    case "SE-LANSFORSAKRINGAR":
    case "SE-LÄNSFÖRSÄKRINGAR":
      return <Lansforsakringar className={className} {...rest} />;
    case "SE-IF":
    case "NO-IF":
    case "DK-IF":
      return <If className={className} {...rest} />;
    case "SE-DINA":
      return <Dina className={className} {...rest} />;
    case "SE-EUROACCIDENT":
      return <EuroAccident className={className} {...rest} />;
    case "SE-MODERNA":
      return <Moderna className={className} {...rest} />;
    case "SE-MOVESTIC":
      return <Movestic className={className} {...rest} />;
    case "SE-BLIWA":
      return <Bliwa className={className} {...rest} />;
    case "SE-SVEDEA":
      return <Svedea className={className} {...rest} />;
    case "SE-SVELAND":
      return <Sveland className={className} {...rest} />;
    case "SE-TREKRONOR":
    case "SE-SWEDBANK":
      return <Swedbank className={className} {...rest} />;
    case "SE-GJENSIDIGE":
    case "NO-GJENSIDIGE":
      return <Gjensidige className={className} {...rest} />;
    case "SE-ICA":
      return <Ica className={className} {...rest} />;
    case "SE-HEDVIG":
      return <Hedvig className={className} {...rest} />;
    case "SE-PAYDRIVE":
      return <Paydrive className={className} {...rest} />;
    case "SE-SKANDIA":
      return <Skandia className={className} {...rest} />;
    case "SE-LARARFORBUNDET":
      return <Lararforbundet className={className} {...rest} />;
    case "SE-VOLVIA":
      return <Volvia className={className} {...rest} />;
    case "SE-AMERICAN-EXPRESS":
      return <AmericanExpress className={className} {...rest} />;
    case "SE-BANK-NORWEGIAN":
      return <BankNorwegian className={className} {...rest} />;
    case "SE-IKANO-BANK":
      return <IkanoBank className={className} {...rest} />;
    case "SE-MARGINALEN-BANK":
      return <Marginalen className={className} {...rest} />;
    case "SE-REMEMBER":
      return <Remember className={className} {...rest} />;
    case "SE-SEB":
      return <SEB className={className} {...rest} />;
    case "SE-HANDELSBANKEN":
      return <Handelsbanken className={className} {...rest} />;
    case "SE-VOLVOFINANS":
      return <VolvoFinans className={className} {...rest} />;
    case "SE-EVERYDAY":
      return <Everyday className={className} {...rest} />;
    case "SE-ECSTER":
      return <Ecster className={className} {...rest} />;
    case "SE-OKQ8":
      return <OKQ8 className={className} {...rest} />;
    case "SE-COLLECTORBANK":
      return <CollectorBank className={className} {...rest} />;
    case "SE-FOREXBANK":
      return <ForexBank className={className} {...rest} />;
    case "SE-AVANZA":
      return <Avanza className={className} {...rest} />;
    case "SE-DEMO":
    case "NO-DEMO":
    case "DK-DEMO":
      return <DemoCompany className={className} {...rest} />;
    case "BANKID":
      return <BankIdColor className={className} {...rest} />;
    case "BANKID-BLANK":
      return <BankIdBlank className={className} color={color} {...rest} />;

    case "NO-BANKID":
      return <NorwegianBankID className={className} color={color} {...rest} />;
    case "NO-FRENDE":
      return <Frende className={className} color={color} {...rest} />;
    case "NO-EIKA":
      return <Eika className={className} color={color} {...rest} />;
    case "NO-SPAREBANK1":
      return <Sparebank1 className={className} color={color} {...rest} />;
    default:
      return null;
  }
}
