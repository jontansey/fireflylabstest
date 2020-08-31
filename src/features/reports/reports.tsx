import React, { useEffect, useState } from "react";
import { Container, Row } from "react-grid-system";
import ReportPanel from "./reportPanel";

import { randomReports as genReports } from "../../utils/dummyData/dummyReports";
import { Report } from "../../common/types/report";
import { Option } from "../../common/types/select";
import NoReports from "./noReports";
import NewReportModal from "./newReportModal";

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [reportOptions, setReportOptions] = useState<Option[]>([]);
  const [visibleReports, setVisibleReports] = useState<number[]>([]);

  const [creatingNew, setCreatingNew] = useState<boolean>(false);

  useEffect(() => {
    const randomReports = genReports();
    setReports(randomReports);
  }, []);

  useEffect(() => {
    setReportOptions(
      reports.map(({ name, id }) => ({
        label: name,
        value: id,
      }))
    );
  }, [reports]);

  const addReport = (newReport: Report) => {
    setReports([...reports, newReport]);
    setVisibleReports([...visibleReports, newReport.id]);
    setCreatingNew(false);
  };

  const view = (option: Option) =>
    setVisibleReports([...visibleReports, +option.value]);

  const hide = (toRemoveId: Number) =>
    setVisibleReports([...visibleReports.filter((id) => toRemoveId !== id)]);

  return (
    <>
      <Container>
        <Row>
          {visibleReports.length === 0 ? (
            <NoReports
              options={reportOptions}
              view={view}
              createNew={() => setCreatingNew(true)}
            />
          ) : (
            visibleReports.map((id) => (
              <ReportPanel
                report={reports.find((r) => r.id === id)}
                options={reportOptions}
                view={view}
                onClose={() => hide(id)}
                key={id}
              />
            ))
          )}
        </Row>
      </Container>
      <NewReportModal
        modalOpen={creatingNew}
        close={() => setCreatingNew(false)}
        saveReport={addReport}
      />
    </>
  );
};

export default Reports;
