class Audio < ApplicationRecord
  mount_uploader :audio, AudioUploader

  validates :audio, presence: true
  validates :title, presence: true
end
