export interface PipelineStep {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

export interface Benefit {
  readonly title: string;
  readonly description: string;
}

export interface ImpactItem {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
}
