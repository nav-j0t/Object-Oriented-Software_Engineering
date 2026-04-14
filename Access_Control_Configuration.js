/**
 * SECMS Access Control Configuration
 * Updated based on Submission 2 Requirements
 */

export const accessControl = {
  // FR-01 & FR-03: Administrators manage the accounts and roles [cite: 9]
  users: {
    create: ['admin'],
    read: ['admin'],
    update: ['admin'],
    delete: ['admin'],
  },

  // FR-12 & FR-14: Caregivers schedule activities; clinical staff have view-only access [cite: 9]
  activities: {
    create: ['caregiver'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['caregiver'],
    delete: [],
  },

  // Attendance logging for residents by caregivers [cite: 9]
  attendances: {
    create: ['caregiver'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['caregiver'],
    delete: [],
  },

  // FR-16 & FR-17: Emergency alerts can be created and updated by all staff roles [cite: 10]
  emergency_alerts: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['caregiver', 'nurse', 'doctor'],
    delete: [],
  },

  // FR-10: Caregivers log doses; Doctors/Nurses prescribe or modify dosages [cite: 9]
  // FR-21: High-risk medication administration requires clinical verification [cite: 10]
  medications: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['nurse', 'doctor'],
    verify: ['nurse', 'doctor'],
    delete: ['nurse', 'doctor'],
  },

  // Automated system reminders viewable by all staff [cite: 9]
  reminders: {
    create: [],
    read: ['caregiver', 'nurse', 'doctor'],
    update: [],
    delete: [],
  },

  // FR-05 & FR-06: General creation, but only Doctors update medical profiles [cite: 9]
  // FR-07: Deletion is restricted; Admins archive inactive profiles [cite: 9]
  residents: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['doctor'],
    delete: ['admin'],
  },

  // FR-08: Caregivers and Nurses record logs [cite: 9]
  vitals: {
    create: ['caregiver', 'nurse'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['nurse'],
    delete: [],
  },

  // FR-19 & FR-20: Role-based report generation and PDF/CSV export [cite: 10, 224]
  reports: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: [],
    delete: [],
  },

  // FR-25: Access to real-time IoT trend visualization dashboard [cite: 10]
  // NFR-04: Dashboard restricted to authorized clinical and admin roles [cite: 23]
  iot_dashboard: {
    create: [],
    read: ['admin', 'nurse', 'doctor'],
    update: [],
    delete: [],
  },
};
