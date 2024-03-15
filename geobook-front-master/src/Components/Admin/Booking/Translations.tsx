export interface Translations {
  navigation: {
    today: string; // Today in Georgian
    month: string; // Month in Georgian
    week: string; // Week in Georgian
    day: string; // Day in Georgian
    agenda: string;
  },
  form: {
    addTitle: string, // Add in Georgian
    editTitle: string, // Edit in Georgian
    confirm: string, // Confirm in Georgian
    delete: string, // Delete in Georgian
    cancel: string, // Cancel in Georgian
  },
  event: {
    title: string, // Title in Georgian
    start: string, // Start in Georgian
    end: string, // End in Georgian
    allDay: string, // All Day in Georgian
  },
  moreEvents: string, // More Events in Georgian
  loading: string, // Loading in Georgian
  noDataToDisplay: string,
}
const georgianTranslations: Translations = {
    navigation: {
      today: "დღეს", // Today in Georgian
      month: "თვე", // Month in Georgian
      week: "კვირა", // Week in Georgian
      day: "დღე", // Day in Georgian
      agenda: "agenda"
    },
    form: {
      addTitle: "დამატება", // Add in Georgian
      editTitle: "რედაქტირება", // Edit in Georgian
      confirm: "დადასტურება", // Confirm in Georgian
      delete: "წაშლა", // Delete in Georgian
      cancel: "გაუქმება", // Cancel in Georgian
    },
    event: {
      title: "სათაური", // Title in Georgian
      start: "დაწყება", // Start in Georgian
      end: "დასრულება", // End in Georgian
      allDay: "მთელი დღე", // All Day in Georgian
    },
    moreEvents: "მეტი ღონიძიება", // More Events in Georgian
    loading: "იტვირთება...", // Loading in Georgian
    noDataToDisplay: "დაჯავშნილი ადგილები არ მოიძებნა"
  };
  export default georgianTranslations