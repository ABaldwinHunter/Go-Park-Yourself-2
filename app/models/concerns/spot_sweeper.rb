module SpotSweeper

  def self.sweep!
    format_spots_for_texts(self.get_hatching_spots).each do |formatted_spot|
      Message.send_text_message(formatted_spot)
    end
    self.clear_inactive_spots!
  end

  def self.get_active_spots
    Spot.where(active: true).where(remind?: true)
  end

  def self.get_hatching_spots
    spots_to_be_sent_reminders_now = []
    self.get_active_spots.each do |spot|
      if spot.expiration && spot.expiration - Time.now < 3600
        spots_to_be_sent_reminders_now < spot
      end
    end
    spots_to_be_sent_reminders_now
  end

  def self.format_spots_for_texts(spots)
    formatted_spots = []
    spots.each do |spot|
      spot = Hash.new
      spot[:body] = "Hi there #{spot.user.first_name}! Please move your vehicle before parking expires at #{spot.expiration}"
      spot[:number] = "+1#{user.phone}"
      formatted_spots << spot
    end
    formatted_spots
  end

  def self.clear_inactive_spots!
    self.get_active_spots.each do |spot|
      if spot.expiration && spot.expiration - Time.now < -3600 || spot.created_at < Time.now - 604800
        spot.active = false
      end
    end
  end
end