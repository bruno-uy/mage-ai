import { useState } from 'react';

import ErrorsType from '@interfaces/ErrorsType';
import TriggerDetail from '@components/Triggers/Detail';
import TriggerEdit from '@components/Triggers/Edit';
import PrivateRoute from '@components/shared/PrivateRoute';
import api from '@api';
import { PAGE_NAME_EDIT } from '@components/PipelineDetail/constants';

type TriggerDetailPageProps = {
  pipelineScheduleId?: string;
  pipelineUUID: string;
  subpath: string;
};

function TriggerDetailPage({
  pipelineScheduleId,
  pipelineUUID,
  subpath,
}: TriggerDetailPageProps) {
  const [errors, setErrors] = useState<ErrorsType>(null);

  const {
    data: dataGlobalVariables,
  } = api.variables.pipelines.list(pipelineUUID);
  const globalVariables = dataGlobalVariables?.variables;

  const {
    data: pipelineScheduleData,
    mutate: fetchPipelineSchedule,
  } = api.pipeline_schedules.detail(pipelineScheduleId);
  const pipelineSchedule = pipelineScheduleData?.pipeline_schedule;

  const { data: dataPipeline } = api.pipelines.detail(pipelineUUID, {
    includes_content: false,
    includes_outputs: false,
  }, {
    revalidateOnFocus: false,
  });
  const pipeline = {
    ...dataPipeline?.pipeline,
    uuid: pipelineUUID,
  };

  if (PAGE_NAME_EDIT === subpath) {
    return (
      <TriggerEdit
        errors={errors}
        fetchPipelineSchedule={fetchPipelineSchedule}
        pipeline={pipeline}
        pipelineSchedule={pipelineSchedule}
        setErrors={setErrors}
        variables={globalVariables}
      />
    );
  }

  return (
    <TriggerDetail
      errors={errors}
      fetchPipelineSchedule={fetchPipelineSchedule}
      pipeline={pipeline}
      pipelineSchedule={pipelineSchedule}
      setErrors={setErrors}
      variables={globalVariables}
    />
  );
}

TriggerDetailPage.getInitialProps= async(ctx: any) => {
  const {
    pipeline: pipelineUUID,
    slug: slugArray,
  }: {
    pipeline: string,
    pipeline_run_id: number;
    slug: string[],
  } = ctx.query;

  if (Array.isArray(slugArray)) {
    const [pipelineScheduleId, subpath] = slugArray;

    return {
      pipelineScheduleId,
      pipelineUUID,
      subpath,
    };
  }

  return {
    pipelineUUID,
  };
};

export default PrivateRoute(TriggerDetailPage);
