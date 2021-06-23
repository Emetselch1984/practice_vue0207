require 'rails_helper'
feature "トップ画面 " do
  before do
    WebMock.enable! # WebMockの有効化
    allow(Rails.application.credentials).to receive(:qiita).and_return({token: '123'})
    WebMock.stub_request(:get, "https://qiita.com/api/v2/items").
      with(
        headers: {'Authorization' => "Bearer 123"}
      ).
      to_return(
        status: 200,
        headers: { 'Content-Type' => 'application/json' }
      )
  end
  scenario "情報の取得" , js:true do
    fill_in "タイトル", with: "Rails"
    expect(page).to be_truthy
  end
end