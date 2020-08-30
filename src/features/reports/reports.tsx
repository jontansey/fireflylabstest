import React, { useEffect, useState } from "react";
import { Container, Row } from "react-grid-system";
import ReportPanel from "./reportPanel";

import { randomReports as genReports } from "../../utils/dummyData/dummyReports";
import { Report } from "../../common/types/report";
import { Option } from "../../common/types/select";
import NoReports from "./noReports";

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [reportOptions, setReportOptions] = useState<Option[]>([]);
  const [visibleReports, setVisibleReports] = useState<number[]>([]);

  useEffect(() => {
    const randomReports = genReports();
    setReports(randomReports);
    setReportOptions(
      randomReports.map(({ name, id }) => ({
        label: name,
        value: id,
      }))
    );
  }, []);

  const view = (option: Option) => {
    setVisibleReports([...visibleReports, +option.value]);
  };

  const hide = (toRemoveId: Number) => {
    debugger;
    setVisibleReports([...visibleReports.filter((id) => toRemoveId !== id)]);
  };

  return (
    <Container>
      <Row>
        {visibleReports.length === 0 ? (
          <NoReports options={reportOptions} view={view} />
        ) : (
          visibleReports.map((id) => (
            <ReportPanel
              report={reports.find((r) => r.id === id)}
              options={reportOptions}
              view={view}
              onClose={() => hide(id)}
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Reports;
