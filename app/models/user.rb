class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :student_id, presence: true,
                       uniqueness: true,
                       format: { with: /\A\d{6}\z/, message: "は6桁の数字で入力してください" }
  validates :name, presence: true
  def email_required?
    false
  end

  def email_changed?
    false
  end

  def will_save_change_to_email?
    false
  end
end
