const permissions = {
  // FR-01 & FR-03: Administrators manage the accounts
  users: {
    create: ['admin'],
    read: ['admin'],
    update: ['admin'],
    delete: ['admin'],
  },

  activities: {
    create: ['caregiver'],
    read: ['caregiver', 'nurse', 'doctor'], // FR-12: View-only for clinical staff
    update: ['caregiver'],
    delete: [],
  },

  attendances: {
    create: ['caregiver'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['caregiver'],
    delete: [],
  },

  emergency_alerts: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['caregiver', 'nurse', 'doctor'],
    delete: [],
  },

  // FR-10 & FR-21: Caregivers can LOG (create), but only Clinical can MODIFY (update/delete)
  medications: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['nurse', 'doctor'], // REMOVED caregiver for safety
    delete: ['nurse', 'doctor'], // Demo feature limited to clinical authority
  },

  reminders: {
    create: [],
    read: ['caregiver', 'nurse', 'doctor'],
    update: [],
    delete: [],
  },

  // FR-06: Caregivers can register a resident, but only Doctors modify the medical profile
  residents: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['doctor'], // UPDATED: Only Doctors update diagnosis/history
    delete: ['admin'], // FR-07: Archive (delete) is for Admin only
  },

  vitals: {
    create: ['caregiver', 'nurse'],
    read: ['caregiver', 'nurse', 'doctor'],
    update: ['nurse'], // UPDATED: Caregivers shouldn't overwrite vital logs
    delete: [],
  },

  reports: {
    create: ['caregiver', 'nurse', 'doctor'],
    read: ['caregiver', 'nurse', 'doctor'], // FR-20: Needed to view/export
    update: [],
    delete: [],
  },
};
