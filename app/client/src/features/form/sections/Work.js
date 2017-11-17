/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { Section, Button } from '../../../shared/components'
import Job from './fragments/Job'
import {
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
} from '../actions'
import type { FormValues } from '../types'
import type { State } from '../../../shared/types'

type Props = {
  work: $PropertyType<FormValues, 'work'>,
  jobCount: number,
  jobHighlights: Array<number>,
  addJob: () => void,
  removeJob: () => void,
  addJobHighlight: (index: number) => void,
  removeJobHighlight: (index: number) => void
}

function Work({
  work,
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
}: Props) {
  return (
    <Section heading="Your Work Experience">
      {work.map(
        (job, i) =>
          job != null && (
            <Job
              key={i}
              index={i}
              highlights={job.highlights}
              addHighlight={addJobHighlight}
              removeHighlight={removeJobHighlight}
            />
          )
      )}
      <Button onClick={addJob} type="button">
        Add Job
      </Button>
      <Button onClick={removeJob} type="button">
        Remove Job
      </Button>
    </Section>
  )
}

function mapState(state: State) {
  return {
    work: state.form.resume.values.work
  }
}

const actions = {
  addJob,
  removeJob,
  addJobHighlight,
  removeJobHighlight
}

export default connect(mapState, actions)(Work)
