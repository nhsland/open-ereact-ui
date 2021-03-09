import { ThemeState } from 'styles/theme/slice/types';
import { PatientListState } from 'app/pages/HomePage/types';
import { PatientState } from 'app/pages/Monitoring/Patient/types';
import { MonitoringState } from 'app/pages/Monitoring/types';
export interface RootState {
  theme?: ThemeState;
  patientList?: PatientListState;
  patient?: PatientState;
  monitoring?: MonitoringState;
}