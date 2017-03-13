// This file defines the metric model used in the entire application

interface HistRec {
  label: string;
  value: string;
}

interface CpuCore {
  frequency: string;
  name: string;
  usage: string;
  histRec: HistRec[];
}

interface Process {
  cpuOccupied: string;
  guid: string;
  pid: string;
  ramOccupied: string;
  uid: string;
  name?: string;
  status?: boolean;
}

interface Partition {
  filesystem: string;
  mountPt: string;
  name: string;
  storage: string;
}

interface MetricContent {
  hostname: string;
  status: boolean;
  process: boolean;
  ram: string;
  storage: string;
  cpuData?: { cores: CpuCore[] };
  processData?: { processes: Process[] }; 
  storageData?: { storagePartitions: Partition[] };
  ramData?: { buffer: string, swapUsage: string, totalMemory: string, histRec: HistRec[] };
}

export interface Metrics {
  data: MetricContent;
}
