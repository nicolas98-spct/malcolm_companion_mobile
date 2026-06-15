import * as Haptics from 'expo-haptics';

export async function tap() {
  try {
    await Haptics.selectionAsync();
  } catch {
    // Haptics can be unavailable in some simulators; ignore silently.
  }
}

export async function success() {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch {
    // Haptics can be unavailable in some simulators; ignore silently.
  }
}
